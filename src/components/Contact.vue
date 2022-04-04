<template>
  <div>
    <form @submit.prevent="submit" class="grid md:grid-cols-2 gap-6 p-6" novalidate="true">
      <div class="md:col-span-2 grid gap-2">
        <div v-show="errors.length">
          <ul class="grid gap-2">
            <li v-for="error in errors" v-bind:key="error" class="bg-red-500 px-2 py-1 rounded duration-200">{{ error }}</li>
          </ul>
        </div>
        <div v-if="messageSend">
          <p class="bg-emerald-500 px-2 py-1 rounded duration-200">Message envoyé avec succès</p>
        </div>
      </div>
      <div class="flex flex-col grid gap-2 md:w-auto md:mx-auto">
        <label class="text-[#DA5759] text-left p-2 text-lg font-bold" for="">Nom:</label>
        <input class="px-2 py-1 border-2 rounded-lg border-white-500 transition duration-200 outline outline-transparent focus:border-[#DA5759] md:w-80"  type="text" id="name" name="name" autocomplete="name" v-model="name">
      </div>
      <div class="flex flex-col grid gap-2 md:w-auto md:mx-auto">
        <label class="text-[#DA5759] text-left p-2 text-lg font-bold" for="">Prénom:</label>
        <input class="px-2 py-1 border-2 rounded-lg border-white-500 transition duration-200 outline outline-transparent focus:border-[#DA5759] md:w-80" type="text" id="surname" name="surname" autocomplete="surname" v-model="surname">
      </div>
      <div class="flex flex-col grid gap-2 md:w-auto md:mx-auto">
        <label class="text-[#DA5759] text-left p-2 text-lg font-bold" for="">Objet:</label>
        <input class="px-2 py-1 border-2 rounded-lg border-white-500 transition duration-200 outline outline-transparent focus:border-[#DA5759] md:w-80" type="text" id="object" name="object" autocomplete="objet" v-model="object">
      </div>
      <div class="flex flex-col grid gap-2 md:w-auto md:mx-auto">
        <label class="text-[#DA5759] text-left p-2 text-lg font-bold" for="">Mail:</label>
        <input class="px-2 py-1 border-2 rounded-lg border-white-500 transition duration-200 outline outline-transparent focus:border-[#DA5759] md:w-80" type="text" id="email" name="email" autocomplete="email" v-model="email">
      </div>
      <div class="flex flex-col grid gap-2 md:w-auto md:mx-auto">
        <label class="text-[#DA5759] text-left p-2 text-lg font-bold" for="">Message:</label>
        <textarea class="px-2 py-1 border-2 rounded-lg border-white-500 transition duration-200 outline outline-transparent focus:border-[#DA5759] md:w-80" name="message" id="message" cols="40" rows="10" v-model="message"></textarea>
      </div>
      <input class="md:col-span-2 mx-auto cursor-pointer mt-5 px-5 py-2 bg-[#DA5759] transition duration-200 text-[#000000] font-bold rounded-xl flex items-center w-fit" value="Envoyer" type="submit" name="" id="">
    </form>
  </div>
</template>

<script>
import smtp from '@/customeScript/smtp';

export default {
  data() {
    return {
      errors: [],
      messageSend: false,
      name: null,
      surname: null,
      email: null,
      object: null,
      message: null,
    };
  },
  methods: {
    checkForm() {
      console.log('in checkForm');
      if (this.name && this.surname && this.email && this.validEmail(this.email) && this.object && this.message && !(this.message.length <= 20) && !this.messageSend) {
        this.errors = [];
        return true;
      }
      console.log(this.messageSend);
      this.errors = [];
      if (this.messageSend) {
        this.errors.push('Le message a déjà été envoyé attendais quelques secondes.');
      }
      if (!this.name) {
        this.errors.push('Le champ Nom doit être rempli.');
      }
      if (!this.surname) {
        this.errors.push('Le champ Prénom doit être rempli.');
      }
      if (!this.email) {
        this.errors.push('Le champ Email doit être rempli.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Une adresse email valide est requise.');
      }
      if (!this.object) {
        this.errors.push('Le champ Object doit être rempli.');
      }
      if (!this.message) {
        this.errors.push('Le champ Message doit être rempli.');
      } else if (this.message.length <= 20) {
        this.errors.push('Le champ Message doit contenir plus de 20 caractères.');
      }
      return false;
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    submit() {
      if (!this.checkForm()) {
        return;
      }
      this.sendEmail();
    },
    sendEmail() {
      console.log('in sendemail');
      smtp.send({
        Host: 'smtp.elasticemail.com',
        Username: 'boudratristan@gmail.com',
        Password: '166B7F9DE4837B73CD686474585DF4CDAC50',
        To: 'boudratristan@gmail.com',
        From: 'boudratristan@gmail.com',
        Subject: 'Formulaire portfolio',
        Body: `<html><h2>${this.name} ${this.surname} </h2><p style="font-size: 14px; margin: 0;"><strong>Email : ${this.email}</strong></p><p style="font-size: 14px; margin: 0;"><strong>Object : ${this.object}</strong></p><br></br><pre style="font-size: 14px;  margin: 0;"><strong>message : </strong><br>${this.message}</pre></html>`,
      }).then(
        (message) => this.verifEmailSending(message),
      );
    },
    verifEmailSending(message) {
      console.log('in verifEmailSending');
      console.log(message);
      if (message === 'OK') {
        this.messageSend = true;
        console.log('is send');
        localStorage.name = '';
        localStorage.surname = '';
        localStorage.email = '';
        localStorage.object = '';
        localStorage.message = '';
        // eslint-disable-next-line
        setTimeout(() => {
          this.messageSend = false;
          this.errors = [];
          console.log(this.messageSend);
        }, 10000);
      } else {
        this.errors.push('Une erreur durant l\'envoi est survenue, réessayé !');
      }
    },
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.tel) {
      this.tel = localStorage.tel;
    }
    if (localStorage.object) {
      this.object = localStorage.object;
    }
    if (localStorage.message) {
      this.message = localStorage.message;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    surname(newSurname) {
      localStorage.surname = newSurname;
    },
    email(newEmail) {
      localStorage.email = newEmail;
    },
    object(newObject) {
      localStorage.object = newObject;
    },
    message(newMessage) {
      localStorage.message = newMessage;
    },
  },
};
</script>
