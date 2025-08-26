<template>
  <section class="contact" id="contact">
    <h2>Contact Me</h2>
    <p>
      Have a project in mind or just want to say hi? Fill out the form below or reach me directly:
    </p>

    <form class="contact-form" @submit.prevent="handleSubmit">
      <label for="name">Name</label>
      <input v-model="formData.name" type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input v-model="formData.email" type="email" id="email" name="_replyto" required />

      <label for="message">Message</label>
      <textarea v-model="formData.message" id="message" name="message" rows="5" required></textarea>

      <div style="position: absolute; left: -9999px; top: -9999px;">
        <input type="text" v-model="formData.extra_field" name="extra_field" tabindex="-1" autocomplete="off">
      </div>

      <input type="hidden" v-model="formData.js_check" name="js_check">

      <button type="submit" class="btn">Send Message</button>
    </form>

    <p v-if="status" class="status">{{ status }}</p>

    <div class="contact-info">
      <p><strong>Email:</strong> <a href="mailto:jurgehn12@gmail.com">jurgehn12@gmail.com</a></p>
      <p class="socials">
        <a href="https://github.com/yourusername" target="_blank" class="icon-btn"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" class="icon-btn"><i class="fab fa-linkedin-in"></i></a>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
  extra_field: "", 
  js_check: ""    
});

const status = ref("");

onMounted(() => {
  formData.value.js_check = "passed";
});

async function handleSubmit() {
  status.value = "Submitting...";

  if (formData.value.extra_field) {
    status.value = "Bot detected!";
    return;
  }

  if (formData.value.js_check !== "passed") {
    status.value = "Bot detected!";
    return;
  }

  try {
    const data = new FormData();
    Object.entries(formData.value).forEach(([key, value]) => {
      data.append(key, value);
    });

    const response = await fetch("https://formspree.io/f/mqabwpqk", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      status.value = "✅ Thanks for your submission!";
      formData.value = { name: "", email: "", message: "", extra_field: "", js_check: "passed" };
    } else {
      const resData = await response.json();
      if (resData.errors) {
        status.value = resData.errors.map(err => err.message).join(", ");
      } else {
        status.value = "❌ Oops! There was a problem submitting your form.";
      }
    }
  } catch (err) {
    status.value = "❌ Oops! There was a problem submitting your form.";
  }
}
</script>

<style scoped>
.contact {
  padding: 4rem 2rem;
  background-color: #1e293b;
  color: #e2e8f0;
  text-align: center;
}

.contact h2 {
  font-size: 2rem;
  color: #facc15;
  margin-bottom: 1rem;
}

.contact p {
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.contact-form {
  display: grid;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto 2rem;
}

.contact-form label {
  text-align: left;
  font-weight: 500;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid #facc15;
}

.btn {
  background-color: #facc15;
  color: #1a1a1a;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #eab308;
}

.contact-info {
  font-size: 1rem;
}

.contact-info a {
  color: #facc15;
  text-decoration: none;
}

.contact-info .socials {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.icon-btn {
  background-color: #0f172a;
  color: #facc15;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background 0.3s ease, transform 0.2s ease;
}

.icon-btn:hover {
  background-color: #334155;
  transform: scale(1.1);
}
</style>
