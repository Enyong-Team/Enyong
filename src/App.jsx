import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { CoinProvider } from "./context/coincontext";


/* ===== MAIN PAGES ===== */
import Home from './home/Home';
import Settings from './home/settingPage/setting.jsx';
import About from './home/aboutPage/about.jsx'
import Account from './home/accountPage/account.jsx';
import DailyG from './home/DailyGoals/dailyGoals.jsx';
import Game from './Game/game.jsx';

/* ===== AUTHENTICATION PAGES ===== */
import SignIn from './authentication/signIn.jsx';
import OtpSignIn from './authentication/otpSignIn.jsx';
import LoadingScreen from './authentication/loadingScreen.jsx';
import ForgotPassword from './authentication/forgotpassword/forgotPassword.jsx';
import VerifyPhoneNumber from './authentication/forgotpassword/verifyPhoneNumber.jsx';
import CreateNewPassword from './authentication/forgotpassword/createNewPassword.jsx';

//Minigames
import Ranking from './home/ranking/studentRanking.jsx';
import Rank from './home/rank/rank.jsx'
import EarnCoins from './home/earnCoin/earnCoin.jsx'
  //Play With Partner
  import PlayWithPartner from './home/playwithpartner/PlayWithPartner';
  import Generate1 from "./home/playwithpartner/Generate1";
  import Generate2 from "./home/playwithpartner/Generate2";
  import Scan1 from "./home/playwithpartner/Scan1";
  import Scan2 from "./home/playwithpartner/Scan2";
  import Scan3 from "./home/playwithpartner/Scan3";

/* ===== GAME PAGES ===== */
// Random subject selector
import Randomize from './Game/Randomize.jsx';

/* Subject categories */
import MathCTG from './Game/Categories/Math/MathCategory.jsx'
import SciCTG from './Game/Categories/Science/ScienceCategory.jsx'
import FiliCTG from './Game/Categories/Filipino/FilipinoCategory.jsx'
import ApCTG from './Game/Categories/AralingPanlipunan/AralingPanlipunan.jsx'
import EngCTG from './Game/Categories/English/EnglishCategory.jsx'
import MusicArtCTG from './Game/Categories/MusicAndArt/MusicAndArt.jsx'
import PeAndHealthCTG  from './Game/Categories/PhysicalEducationAndHealth/PeAndHealth.jsx';
import GmrcCTG from './Game/Categories/GMRC/GMRC.jsx'
import TleCTG from './Game/Categories/TLE/TLE.jsx';

/* Quiz pages
import ScinceQuiz from './Game/Categories/Science/ScinceQuiz.jsx';
import FilipinoQuiz from './Game/Categories/Filipino/FilipinoQuiz.jsx';
import AralingPanlipunanQuiz from './Game/Categories/AralingPanlipunan/AralingPanlipunanQuiz.jsx';
import EnglishQuiz from './Game/Categories/English/EnglishQuiz.jsx';
import MathQuiz from './Game/Categories/Math/MathQuiz.jsx'
import TLEQuiz from './Game/Categories/TLE/TLEQuiz.jsx';
*/

function App() {

  /* 
    Track the current route
    Used to support "modal routing" where the
    background page remains visible.
  */
  const location = useLocation(); 
  const state = location.state;

  return (
    <>
      {/* 
        MAIN ROUTES
        If a modal is open, render the backgroundLocation.
        Otherwise, render the current location normally.
      */}
      <Routes location={state?.backgroundLocation || location}>

        {/* CORE PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dailyGoals" element={<DailyG />} />
        <Route path="/game" element={<Game />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/earnCoins" element={<EarnCoins />} />

        {/* AUTHENTICATION PAGES */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/otpsignin" element={<OtpSignIn />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/verifynumber" element={<VerifyPhoneNumber />} />
        <Route path="/createnewpass" element={<CreateNewPassword />} />
        

        {/* RANDOM SUBJECT ROUTE */}
        <Route path="/randomize" element={<Randomize />} />

        {/* CATEGORY PAGES */}
        <Route path="/science" element={<SciCTG />} />
        <Route path="/math" element={<MathCTG />} />
        <Route path="/filipino" element={<FiliCTG />} />
        <Route path="/english" element={<EngCTG />} />
        <Route path="/aralingpanlipunan" element={<ApCTG />} />
        <Route path="/musicart" element={<MusicArtCTG />} />
        <Route path="/pehealth" element={<PeAndHealthCTG/>} />
        <Route path="/gmrc" element={<GmrcCTG/>} />
        <Route path="/tle" element={<TleCTG/>} />

        {/*Quiz Route */}
        <Route path="/game" element={<Game />} />

        {/* QUIZ PAGES
        <Route path="/science_quiz" element={<Game />} />
        <Route path="/filipino_quiz" element={<FilipinoQuiz/>} />
        <Route path="/aralingpanlipunan_quiz" element={<AralingPanlipunanQuiz/>} />
        <Route path="/english_quiz" element={<EnglishQuiz/>} />
        <Route path="/math_quiz" element={<MathQuiz/>} />
        <Route path="/tle_quiz" element={<TLEQuiz/>} />
       */ }
      </Routes>


      {/* 
        MODAL ROUTES
        Rendered only when there is a background location.
        This allows these pages to appear as modals 
        on top of the Home screen instead of full navigation.
      */}
      {state?.backgroundLocation && (
        <Routes>

          {/* REPEATED PAGES FOR MODAL DISPLAY */}
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/dailyGoals" element={<DailyG />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/earnCoins" element={<EarnCoins />} />

          {/* AUTHENTICATION PAGES ROUTES */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/otpsignin" element={<OtpSignIn />} />
          <Route path="/loading" element={<LoadingScreen />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/verifynumber" element={<VerifyPhoneNumber />} />
          <Route path="/createnewpass" element={<CreateNewPassword />} />

          {/* RANDOM & CATEGORY ROUTES */}
          <Route path="/randomize" element={<Randomize />} />
          <Route path="/science" element={<SciCTG />} />
          <Route path="/math" element={<MathCTG />} />
          <Route path="/filipino" element={<FiliCTG />} />
          <Route path="/english" element={<EngCTG />} />
          <Route path="/aralingpanlipunan" element={<ApCTG />} />
          <Route path="/musicart" element={<MusicArtCTG />} />
          <Route path="/pehealth" element={<PeAndHealthCTG/>} />
          <Route path="/gmrc" element={<GmrcCTG/>} />
          <Route path="/tle" element={<TleCTG/>} />

          {/* QUIZ ROUTES
          <Route path="/science_quiz" element={<Game />} />
          <Route path="/filipino_quiz" element={<FilipinoQuiz/>} />
          <Route path="/aralingpanlipunan_quiz" element={<AralingPanlipunanQuiz/>} />
          <Route path="/english_quiz" element={<EnglishQuiz/>} />
          <Route path="/math_quiz" element={<MathQuiz/>} />
          <Route path="/tle_quiz" element={<TLEQuiz/>} />
           */}

        </Routes>
      )}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <CoinProvider>
        <App />
      </CoinProvider>
    </BrowserRouter>
  );
}
