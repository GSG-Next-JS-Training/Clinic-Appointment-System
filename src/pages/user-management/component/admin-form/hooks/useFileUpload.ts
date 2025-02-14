import { useState } from "react";

const useFileUpload = () => {
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [base64Data, setBase64Data] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploaded(false);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = (reader.result as string).split(",")[1]; 
        setBase64Data(base64);
        setUploaded(true);
      };
    }
  };

  return { uploaded, base64Data, handleFileChange };
};

export default useFileUpload;