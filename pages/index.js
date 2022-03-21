import {
  Hero,
  Layout,
  OptionDescription,
  SwiperSlider,
  RayExplainTwo,
  RayExplainOne,
  Trust,
  AppLinks,
  RaySocial,
  Coins,
} from '../components';

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <OptionDescription />
        <SwiperSlider />
        <Coins />
        <RayExplainOne />
        <Trust background={'bg-darkBlue'} />
        <RayExplainTwo />
        <AppLinks />
        <RaySocial />
      </Layout>
    </div>
  );
}
