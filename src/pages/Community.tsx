import Community from "@/components/community";
import React from "react";

export default function CommunityPage() {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Community />
    </div>
  );
}
