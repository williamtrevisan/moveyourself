import Cookies from 'js-cookie';

export const state = {
  activeChallenge: null,
  amount: 0,
  challenge: null,
  challenges: {},
  challengesCompleted: Cookies.get('challengesCompleted') ?? 0,
  currentExperience: Cookies.get('currentExperience') ?? 0,
  experienceToNextLevel: 0,
  finalExperience: 0,
  isLevelUpModalOpen: false,
  isNotificationOnScreen: false,
  level: Cookies.get('level') ?? 1,
  percentToNextLevel: 0,
  randomChallengeIndex: 0,
}