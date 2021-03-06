<template>
  <div>
    <header class="experienceBar">
      <span>0 xp</span>
      <div>
        <div v-bind:style="`width: ${percentToNextLevel}%`"/>

        <span v-bind:style="`left: ${percentToNextLevel}%`" class="currentExperience">
          {{ currentExperience }} xp
        </span>
      </div>
      <span>{{ experienceToNextLevel }} xp</span>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters('challenges', [
      'experienceToNextLevel',
      'percentToNextLevel',
    ]),
    ...mapState('challenges', [
      'currentExperience',
    ])
  }
}
</script>

<style>
  .experienceBar {
    align-items: center;
    display: flex;
  }
  .experienceBar span {
    font-size: 1rem;
  }

  .experienceBar > div {
    background: var(--gray-line);
    border-radius: 4px;
    flex: 1;
    height: 4px;
    margin: 0 1.5rem;
    position: relative;
  }

  .experienceBar > div > div {
    background: var(--green);
    border-radius: 4px;
    height: 4px;
  }

  span.currentExperience {
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
  }
</style>