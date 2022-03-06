import {
  Hero,
  Layout,
  OptionDescription,
  SwiperSlider,
  RayExplainTwo,
  RayExplainOne,
  Trust,
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
      </Layout>
    </div>
  );
}
