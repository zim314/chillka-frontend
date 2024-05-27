import CallToActionSection from '@components/CallToActionSection';
import CommentSection from '@components/CommentSection';
import NearbyActivity from '@components/NearbyActivity';
import RecommendActivity from '@components/RecommendActivity';
import TopCategoryMenu from '@components/TopCategoryMenu';
import { Button } from '@ui/button';
import { z } from 'zod';

const Home = () => {
  const mySchema = z.string();
  mySchema.parse('123');

  return (
    <div className="mb-36 space-y-36 ">
      <div>您目前所在位置是首頁</div>
      <Button>我是 shadcn ui 的 button </Button>

      <NearbyActivity />
      <TopCategoryMenu className="mx-auto" />
      <RecommendActivity />
      <CallToActionSection className="mx-auto" />
      <CommentSection className="mx-auto" />
    </div>
  );
};

export default Home;
