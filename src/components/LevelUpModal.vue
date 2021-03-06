<template>
  <div class="overlay">
    <div class="levelUpModalContainer">
      <header>{{ level }}</header>
      <strong>Parabéns</strong>
      <p>Você alcançou um novo level.</p>
      <button 
        type="button"
        v-on:click="closeLevelUpModal"
      >
        <img src="/icons/close.svg" alt="Fechar">
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('challenges', [
      'level',
    ])
  },
  methods: {
    ...mapActions('challenges', [
      'closeLevelUpModal',
    ])
  }
}
</script>

<style>
  .overlay {
    align-items: center;
    background: rgba(242, 243, 245, 0.8);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .levelUpModalContainer {
    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    max-width: 400px;
    padding: 2rem 3rem;
    position: relative;
    text-align: center;
    width: 100%;
  }

  .levelUpModalContainer header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  .levelUpModalContainer strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  .levelUpModalContainer p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }

  .levelUpModalContainer button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }
</style>