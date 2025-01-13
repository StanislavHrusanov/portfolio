import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import certificatesCollection from "../data/certificates.json";

import styles from "./CertificateDetails.module.css";
import BackToHomePage from "./BackToHomePage";

export default function CertificateDetails() {
  const [certificate, setCertificate] = useState({});
  const { certificateTitle } = useParams();

  useEffect(() => {
    const certificateDetails = certificatesCollection.find(
      (c) => c.title === certificateTitle
    );

    setCertificate(certificateDetails);
  }, [certificateTitle]);

  return (
    <div className={styles.details}>
      <BackToHomePage />
      <div className={styles.imgContainer}>
      {certificate?.images?.map((image) => (
        <img key={image} src={`/images/certificates/${image}`} />
      ))}
      </div>
    </div>
  );
}
