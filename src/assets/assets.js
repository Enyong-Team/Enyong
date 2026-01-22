// src/assets/assets.js

/* =========================================
   BUTTONS & ICONS (src/assets/ButtonPIC)
   ========================================= */
import infoPic from './ButtonPIC/info.png';
import accPic from './ButtonPIC/acc.png';
import settingPic from './ButtonPIC/setting.png';
import returnBtnImg from './ButtonPIC/returnBtn.png';
import closeBtn from './ButtonPIC/CloseBtn.png';
import closePic from './ButtonPIC/close.png';
import goBtn from './ButtonPIC/GoBtn.png';
import logoutBtn from './ButtonPIC/logoutBtn.png';
import HomeBtn from './ButtonPIC/HomeBtn.png';
import NextQuestionBtn from './ButtonPIC/NextQuestionBtn.png';
import NextQuestionOrange from './ButtonPIC/NextQuestionOrange.png';
import HintBtn from './ButtonPIC/HintBtn.png';
import editPic from './ButtonPIC/edit.png';
import PlayBtnImg from './ButtonPIC/PlayBtn.png';
import MaharlikaPic from './ButtonPIC/Maharlika.png';

// --- SETTINGS BUTTONS ---
import soundBtn from './ButtonPIC/soundBtn.png';
import musicBtn from './ButtonPIC/musicBtn.png';
import vibrateBtn from './ButtonPIC/vibrateBtn.png';

/* =========================================
   MAIN GAME IMAGES (src/assets/PIC)
   ========================================= */
import coinPic from './PIC/coin.png';
import plusIcon from './PIC/plus icon.png';
import profilePic from './PIC/profile.png';
import QuizCard from './PIC/QuizCard.png';
import scorePic from './PIC/scorepic.png';
import earthPic from './PIC/earth.png';
import depedPic from './PIC/DepEd.png';
import minigamepic from './PIC/MiniGameLogo.png';

// --- CHECKMARKS ---
import checkComp from './PIC/CheckComplete.png';
import checkINC from './PIC/checkINC.png';
import checkMrk from './PIC/checkMrk.png';

/* =========================================
   MINI GAMES (src/assets/minigamespics)
   ========================================= */
import backBtn from './minigamespics/back-btn.png';
import header from './minigamespics/header.png';
import profileLg from './minigamespics/profile-lg.png';
import profileSm from './minigamespics/profile-sm.png';
import qr from './minigamespics/qr.png';
import myQr from './minigamespics/my-qr.png';

/* =========================================
   EARN COIN (src/assets/earnCoinPic)
   ========================================= */
import EarnCoinLogo from './earnCoinPic/EarnCoinLOGO.png';
import EarnCoinPlayBTN from './earnCoinPic/EarnCoinPlayBTN.png';
import EmptyTrophy from './earnCoinPic/EmptyTrophy.png';
import Trophy from './earnCoinPic/Trophy.png';

/* =========================================
   RANK & TIERS (src/assets/rankPic)
   ========================================= */
import RankLogo from './rankPic/rankLogo.png';
import MaharlikaB from './rankPic/maharlikaB.png';
import MarangalB from './rankPic/marangalB.png'
import MaestroB from './rankPic/maestroB.png'
import MandirigmaB from './rankPic/mandirigmaB.png';
import Mandirigma from './rankPic/mandirigmaPic.png';
import Maharlika from './rankPic/maharlikaPic.png';
import Maestro from './rankPic/maestroPic.png';
import Alamat from './rankPic/alamatPic.png';
import Marangal from './rankPic/marangalPic.png';
import Claim from './rankPic/claim.png';

/* =========================================
   RANKING/LEADERBOARD (src/assets/rankingPic)
   ========================================= */
import FirstPlacer from './rankingPic/firstPlacer.png';
import SecondPlacer from './rankingPic/secondPlacer.png';
import ThirdPlacer from './rankingPic/thirdPlacer.png';

/* level and quarter */
import back from "./photo/back.png";
import banner from "./photo/banner.png";
import left1 from "./photo/left1.png";
import right1 from "./photo/right1.png";
import left2 from "./photo/left2.png";
import right2 from "./photo/right2.png";
import startBTN from "./photo/StartLNQ.png";

/* =========================================
   GAME SPECIFIC
   ========================================= */
import SpinningBG from '../Game/nextquestion/spinningBG/SpinningBG.png';

/* =========================================
   EXPORT EVERYTHING
   ========================================= */
export {
  // Home & Buttons
  infoPic, accPic, settingPic, 
  closeBtn, closePic, goBtn, 
  HomeBtn, NextQuestionBtn, NextQuestionOrange, HintBtn,
  editPic, MaharlikaPic,
  
  // Settings Specific (Exported with your names)
  soundBtn as soundPic, 
  musicBtn as musicPic, 
  vibrateBtn as vibratePic,

  // Handling Aliases
  returnBtnImg as ReturnBTN, 
  returnBtnImg as ReturnPic, 
  PlayBtnImg as playPic, 
  
  logoutBtn as LogoutPic,
  plusIcon as plusPic,

  // Main Assets (Home Screen)
  coinPic, profilePic, QuizCard,
  scorePic, earthPic, depedPic, minigamepic,
  
  checkComp, checkINC, checkMrk,

  // Mini Games
  backBtn, header, profileLg, profileSm, qr, myQr,

  // Earn Coin
  EarnCoinLogo, 
  EarnCoinPlayBTN as PlayBTN, 
  Trophy, EmptyTrophy,

  // Rank
  RankLogo, MaharlikaB, Mandirigma, Maharlika, 
  Maestro, Alamat, Marangal, Claim, MarangalB, 
  MandirigmaB, MaestroB,

  // Ranking
  FirstPlacer, SecondPlacer, ThirdPlacer,


  //level and quarter
  back, banner, left1, right1, left2, right2,startBTN,

  // Game
  SpinningBG
};