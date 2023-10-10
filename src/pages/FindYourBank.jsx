import React from 'react'
import Banner from '../components/findYourBank/Banner'
import SearchBank from '../components/findYourBank/SearchBank';
import SpendingAccount from '../components/findYourBank/SpendingAccount';
import SavingsAccount from '../components/findYourBank/SavingsAccount';
import PremiumAccount from '../components/findYourBank/PremiumAccount';
import ElevateMembership from '../components/findYourBank/ElevateMembership';

const FindYourBank = () => {
  return (
    <div>
        <Banner />
        <SearchBank/>
        <SpendingAccount/>
        <SavingsAccount />
        <PremiumAccount />
        <ElevateMembership />
    </div>
  )
}

export default FindYourBank

