<template>
  <div class="challengeBoxContainer">
    <div 
      class="challengeActive"
      v-if="activeChallenge"
    >
      <header>Ganhe {{ activeChallenge.amount }} xp</header>
      <main>
        <img v-bind:src="`icons/${activeChallenge.type}.svg`">
        <strong>Novo desafio</strong>
        <p>{{ activeChallenge.description }}</p>
      </main>
      <footer>
        <button 
          class="challengeFailedButton"
          type="button"
          v-on:click="handleChallengeFailed"
        >
          Falhei
        </button>
        <button 
          class="challengeSucceededButton"
          type="button"
          v-on:click="handleChallengeSucceeded"
        >
          Completei
        </button>
      </footer>
    </div>
    <div 
      class="challengeNotActive"
      v-else
    >
      <strong>Finalize um ciclo para receber um desafio</strong>
      <p>
        <img src="icons/level-up.svg" alt="Level Up">
        Avance de level completando desafios.
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
      ...mapState('challenges', [
        'activeChallenge',
      ])
  },
  methods: {
    ...mapActions('challenges', [
      'handleChallengeFailed',
      'handleChallengeSucceeded',
    ])
  }
}
</script>

<style>
  .challengeBoxContainer {
    align-items: center;
    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 1.5rem 2rem;
    text-align: center;
  }

  .challengeNotActive {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .challengeNotActive strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .challengeNotActive p {
    align-items: center;
    display: flex;
    flex-direction: column;
    line-height: 1.4;
    margin-top: 3rem;
    max-width: 70%;
  }

  .challengeNotActive p img {
    margin-bottom: 1rem;
  }

  .challengeActive {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .challengeActive header {
    border-bottom: 1px solid var(--gray-line);
    color: var(--blue);
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0 2rem 1.5rem;
  }

  .challengeActive main {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  }

  .challengeActive main strong {
    color: var(--title);
    font-size: 2rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
  }

  .challengeActive main p {
    line-height: 1.5;
  }

  .challengeActive footer {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .challengeActive footer button {
    align-items: center;
    border-radius: 5px;
    border: 0;
    color: var(--white);
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    height: 3rem;
    justify-content: center;
    transition: filter 0.2s;
  }

  .challengeActive footer button.challengeFailedButton {
    background: var(--red);
  }

  .challengeActive footer button.challengeSucceededButton {
    background: var(--green)
  }

  .challengeActive footer button:hover {
    filter: brightness(0.9);
  }
</style>