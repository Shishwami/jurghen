<template>
  <section class="certificates" id="certificates">
    <h2>Certificates</h2>
    <div class="cert-grid">
      <div class="cert-card" v-for="(cert, index) in visibleCertificates" :key="cert.title">
        <img :src="cert.image" :alt="cert.title" class="cert-image" />
        <h3>{{ cert.title }}</h3>
        <p class="issuer">{{ cert.issuer }}</p>
        <p class="date">{{ cert.date }}</p>

        <!-- External link -->
        <a v-if="cert.link" :href="cert.link" target="_blank" rel="noopener" class="btn">
          View Certificate
        </a>

        <!-- Internal slug -->
        <router-link v-else-if="cert.slug" :to="`/certificates/${cert.slug}`" class="btn">
          View Certificate
        </router-link>
      </div>
    </div>

    <!-- Toggle Show More / Show Less -->
    <div class="more-certificates-link">
      <button @click="toggleShow" class="btn-outline">
        {{ showAll ? "Show Less Certificates" : "Show More Certificates" }}
      </button>
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
import { watch, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import certificateData from '../assets/Data/certificates.json';

export default {
  name: 'Certificates',
  setup() {
    const route = useRoute();
    const router = useRouter();

    const certificates = certificateData.map(c => ({
      ...c,
      image: `/Images/Certificates/${c.image}`
    }));

    const selectedCert = ref(null);
    const showAll = ref(false);

    const visibleCertificates = computed(() =>
      showAll.value ? certificates : certificates.slice(0, 6)
    );

    watch(
      () => route.params.slug,
      slug => {
        if (slug) {
          selectedCert.value = certificates.find(c => c.slug === slug);
          document.body.classList.add("no-scroll");
        } else {
          selectedCert.value = null;
          document.body.classList.remove("no-scroll");
        }
      },
      { immediate: true }
    );

    function closeModal() {
      selectedCert.value = null;
      router.push("/");
    }

    function toggleShow() {
      showAll.value = !showAll.value;
    }

    return {
      certificates,
      selectedCert,
      closeModal,
      showAll,
      visibleCertificates,
      toggleShow
    };
  }
};
</script>

<style scoped>
.certificates {
  padding: 4rem 2rem;
  text-align: center;
  background-color: var(--bg-dark);
}

.certificates h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--accent, #facc15);
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }
}

.cert-card {
  background-color: var(--bg-card, #1e293b);
  border-radius: 16px;
  padding: 1.5rem;
  color: var(--text, #ffffff);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cert-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.cert-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  background-color: var(--bg-main, #0f172a);
}

.cert-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

.issuer {
  font-size: 1rem;
  color: #94a3b8;
}

.date {
  font-size: 0.9rem;
  color: #cbd5e1;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  background-color: var(--primary, #facc15);
  color: var(--text-dark, #1a1a1a);
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background-color: var(--accent-hover, #eab308);
  transform: translateY(-2px);
}

.more-certificates-link {
  margin: 2rem auto 0;

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
  background: var(--bg-card, #facc15);
  position: relative;
  height: 80vh;
  width: 700px;
  overflow: auto;
  padding: 8px;
  border-radius: 12px;
}

.modal-content img {
  width: 100%;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: var(--primary, #facc15);

  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;
  border-radius: 50%;

  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-dark, #1a1a1a);
}

.btn-outline {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  background-color: transparent;
  border: 2px solid var(--accent, #facc15);
  color: var(--accent, #facc15);
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.btn-outline:hover {
  background-color: var(--accent, #facc15);
  color: var(--text-dark, #1a1a1a);
  transform: translateY(-2px);
}
</style>

<style>
.no-scroll {
  overflow: hidden;
}
</style>
