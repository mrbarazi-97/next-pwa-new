import { useMemo, useState } from 'react';

import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
} from 'chart.js/';
import { Line } from 'react-chartjs-2';
import Style from './styles/CoinsTableElement.module.css';
import { photos } from '../../public/assets/assets';
import Link from 'next/link';
import Image from 'next/image';
const round = (Number) => {
  Number = Math.round(Number * 100) / 100;
  return Number;
};
const separate = (Number) => {
  Number += '';
  Number = Number.replace(',', '');
  let x = Number.split('.');
  let y = x[0];
  let z = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  // eslint-disable-next-line no-useless-concat
  while (rgx.test(y)) y = y.replace(rgx, '$1' + ',' + '$2');
  let separated = y + z;
  let converted = convert(separated);
  return converted;
};
const convert = (n) => {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
};

export const CoinsTableElement = ({ data, loading }) => {
  ChartJs.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Filler
  );

  const [windowSize, setWindowSize] = useState(true);

  useEffect(() => {
    window.innerWidth >= 786 ? setWindowSize(true) : setWindowSize(false);
  }, []);

  return useMemo(
    () =>
      data.map(({ coin, sellPrice, change, USDPrice, faName, icon }) => (
        <tr
          key={coin}
          className={`${Style.coins__table_body_item} ${
            loading ? Style.coins__table_body_item_loading : ''
          }`}
        >
          <td
            className={`${Style.coins__table_body_item_content} ${coins__table_body_item_name}`}
          >
            <div className={Style.coins__table_body_item_name_image}>
              <Image
                className={Style.coins__table_body_item_name_image_img}
                src={
                  icon
                    ? `https://raybit.io/icons/${icon}.png`
                    : photos.MarketSearchCoinsFormIconLoading
                }
                alt=""
                loading="lazy"
              />
            </div>
            <div className={Style.coins__table_body_item_name_text}>
              <div className={Style.coins__table_body_item_name_text_name}>
                {faName}
              </div>
              <div className={Style.coins__table_body_item_name_text_symbol}>
                {coin}
              </div>
            </div>
          </td>
          <td
            className={`${Style.coins__table_body_item_content} ${Style.coins__table_body_item_number}`}
          >
            {separate(Math.floor(sellPrice / 10))}{' '}
            {windowSize ? <span>تومان</span> : undefined}
          </td>
          {windowSize ? (
            <td
              className={`${Style.coins__table_body_item_content} ${Style.coins__table_body_item_usdt}`}
            >
              {separate(USDPrice)}
              <span> تتر</span>
            </td>
          ) : undefined}
          <td
            className={`${Style.coins__table_body_item_content} ${Style.coins__table_body_item_change}`}
          >
            <span
              className={
                Math.sign(change) >= 0
                  ? Style.coins__table_body_item_change_positive
                  : Style.coins__table_body_item_change - negative
              }
            >
              {separate(round(change))}{' '}
              {windowSize ? <span>٪</span> : undefined}
            </span>
          </td>
          {windowSize ? (
            <td
              className={`${Style.coins__table_body_item_content} ${Style.coins__table_body_item_chart}`}
            >
              <Line
                height={40}
                width={119}
                data={{
                  labels: [
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                  ],
                  datasets: [
                    {
                      label: coin,
                      data: [
                        10, 10.2, 10.9, 9.9, 7.7892, 8.5, 10, 10.2, 10.9, 9.9,
                        7.7892, 8.5, 10, 10.2, 10.9, 9.9, 7.7892, 8.5, 12, 10,
                      ],
                      borderColor: '#2484c6',
                      backgroundColor: 'rgba(36, 132, 198,0.4)',
                      fill: true,
                      borderWidth: 2,
                      cubicInterpolationMode: 'monotone',
                      tension: 0,
                      pointHoverBorderWidth: 0,
                      pointBackgroundColor: 'transparent',
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: true,
                  scales: {
                    y: {
                      display: false,
                      beginAtZero: true,
                    },
                    x: {
                      display: false,
                      beginAtZero: true,
                    },
                  },
                  legend: {
                    labels: {
                      fontSize: 12,
                    },
                  },
                  elements: {
                    point: {
                      radius: 0,
                    },
                    line: {
                      fill: true,
                    },
                  },
                }}
              />
            </td>
          ) : undefined}
          <td
            className={`${coins__table_body_item_content} ${coins__table_body_item_action}`}
          >
            <Link
              href={`/coin/${coin}`}
              className={coins__table_body_item_action_btn}
            >
              معامله
            </Link>
          </td>
        </tr>
      )),
    [data, windowSize, loading]
  );
};
