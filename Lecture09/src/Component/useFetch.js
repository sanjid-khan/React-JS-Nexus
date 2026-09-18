import { useState,useEffect } from "react";

import { useState, useEffect } from "react";

export default function useFetch() {
  const [Profile, setProfile] = useState([]);
  const [numberofProfile, setnumberofProfile] = useState("");

  async function generateProfile(count) {
    try {
      if (!count || count <= 0) {
        console.error("Invalid count");
        setProfile([]);
        return;
      }

      const ran = Math.floor(Math.random() * 100);

      const response = await fetch(
        `https://api.github.com/users?since=${ran}&per_page=${count}`
      );


      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        console.error("Invalid API response");
        setProfile([]);
        return;
      }

      setProfile(data);
    } catch (error) {
      console.error("Fetch Error:", error.message);
      setProfile([]);
    }
  }

  useEffect(() => {
    generateProfile(10);
  }, []);

  return {
    generateProfile,
    numberofProfile,
    setnumberofProfile,
    Profile,
  };
}



