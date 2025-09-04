import { useEffect, useState } from "react";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Replace with your actual Apps Script or API link
    const url = "https://script.google.com/macros/s/AKfycbyxYD5DP4_8Dz3d4cXFLnkPc9J91Zkk6k__GqyJvpPuKvc9pkLcJvDyGymtQQt38ftf/exec";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debugging
        setCertificates(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h2>Certificates</h2>
      {certificates.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {certificates.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
