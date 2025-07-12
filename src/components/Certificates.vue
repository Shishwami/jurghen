<template>
  <section class="certificates" id="certificates">
    <h2>Certificates</h2>
    <div class="cert-grid">
      <div class="cert-card" v-for="cert in certificates" :key="cert.title">
        <img :src="cert.image" :alt="cert.title" class="cert-image" />
        <h3>{{ cert.title }}</h3>
        <p class="issuer">{{ cert.issuer }}</p>
        <p class="date">{{ cert.date }}</p>
        <a v-if="cert.link" :href="cert.link" target="_blank" class="view-link">
          View Certificate
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import certificateData from '../assets/Data/certificates.json'

const images = import.meta.glob('/src/assets/images/certificates/*', {
  eager: true,
  import: 'default'
});

export default {
  name: 'Certificates',
  data() {
    return {
      certificates: certificateData.map(certificate => ({
        ...certificate,
        image: images[`/src/assets/images/certificates/${certificate.image}`]
      }))
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
</style>
