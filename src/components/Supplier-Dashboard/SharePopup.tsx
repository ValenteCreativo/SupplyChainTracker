import React from 'react';
import { Button } from "src/components/UI/button";
import { Share2 } from 'lucide-react';

interface SharePopupProps {
  userImpact: string; // Información de impacto del usuario
}

const SharePopup: React.FC<SharePopupProps> = ({ userImpact }) => {
  
  // Función para compartir en Twitter
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(userImpact)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };


  return (
    <div className="flex space-x-4">
      <Button onClick={shareOnTwitter} className="flex items-center">
        Share on Twitter <Share2 className="ml-2" />
      </Button>
      
    </div>
  );
};

export default SharePopup;
