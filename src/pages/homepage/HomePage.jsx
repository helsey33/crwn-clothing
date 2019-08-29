import React from "react";

import Directory from "../../components/directory/Directory";

// import "./homepage.scss";
import { HomePageContainer } from "./HomePage.styled";

export default function HomePage() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}
