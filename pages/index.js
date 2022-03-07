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
} from '../components';

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <OptionDescription />
        <SwiperSlider />
        <RayExplainOne />
        <Trust />
        <RayExplainTwo />
        <AppLinks />
        <RaySocial />
      </Layout>
    </div>
  );
}
