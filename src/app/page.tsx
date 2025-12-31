import FeatureBlock from "./main/FeatureBlock";
import InfoBlock from "./main/InfoBlock";
import IntroBlock from "./main/IntroBlock";
import Provider from "./main/Provider";
import { news } from "@/data/news";
import NewsGrid from "./news/NewsGrid";

export default function Home() {
  const slice = news.slice(0, 4)
  return (
    <div className="flex flex-col gap-14">
      <IntroBlock/>
      <div className="flex flex-col gap-14 w-(--width,1200px) mx-auto">
        <FeatureBlock/>
        <Provider title="НОВИНИ"/>
        <NewsGrid news={slice}/>
        <Provider title="КОРИСНА ІНФОРМАЦІЯ"/>
        <InfoBlock/>
      </div>
    </div>
  );
}
