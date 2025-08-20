<template>
  <section class="certificates" id="certificates">
    <h2>Certificates</h2>
    <div class="cert-grid">
      <div class="cert-card" v-for="cert in certificates" :key="cert.title">
        <img :src="cert.image" :alt="cert.title" class="cert-image" />
        <h3>{{ cert.title }}</h3>
        <p class="issuer">{{ cert.issuer }}</p>
        <p class="date">{{ cert.date }}</p>

        <!-- External link -->
        <a v-if="cert.link" :href="cert.link" target="_blank" rel="noopener" class="view-link">
          View Certificate
        </a>

        <!-- Internal slug -->
        <router-link v-else-if="cert.slug" :to="`/certificates/${cert.slug}`" class="view-link">
          View Certificate
        </router-link>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedCert" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">✖</button>
        <img :src="selectedCert.image" :alt="selectedCert.title" />
      </div>
    </div>
  </section>
</template>

<script>
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import certificateData from '../assets/Data/certificates.json'

const images = import.meta.glob('/src/assets/images/certificates/*', {
  eager: true,
  import: 'default'
});

export default {
  name: 'Certificates',
  setup() {
    const route = useRoute();
    const router = useRouter();

    const certificates = certificateData.map(c => ({
      ...c,
      image: images[`/src/assets/images/certificates/${c.image}`]
    }));

    const selectedCert = ref(null);

    watch(
      () => route.params.slug,
      slug => {
        if (slug) {
          selectedCert.value = certificates.find(c => c.slug === slug);
          document.body.classList.add("no-scroll");   // disable scroll
        } else {
          selectedCert.value = null;
          document.body.classList.remove("no-scroll"); // re-enable
        }
      },
      { immediate: true }
    );

    function closeModal() {
      selectedCert.value = null;
      router.push("/");
    }

    return {
      certificates,
      selectedCert,
      closeModal
    };
  }
};
</script>

<style scoped>
.certificates {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #0f172a;
}

.certificates h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #facc15;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.cert-card {
  background-color: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  color: white;
  transition: transform 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-5px);
}

.cert-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #0f172a;
}

.issuer {
  font-size: 1rem;
  color: #94a3b8;
}

.date {
  font-size: 0.9rem;
  color: #cbd5e1;
}

.view-link {
  display: inline-block;
  margin-top: 1rem;
  color: #facc15;
  text-decoration: underline;
  font-weight: 600;
}

.view-link:hover {
  color: #eab308;
}

.view-link {
  position: relative;
  z-index: 10;
  cursor: pointer;
}

.cert-card {
  position: relative;
}

.view-link {
  position: relative;
  z-index: 5;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  height: 100vh;
  width: 100vw;
}

.modal-content {
  background: rgb(247, 197, 71);
  position: relative;
  height: 80vh;
  width: 700px;
  overflow: auto;
  padding: 8px;
}

.modal-content img {
  width: 100%;
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<style>
.no-scroll {
  overflow: hidden;
}
</style>
