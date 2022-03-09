import { useEffect, useLayoutEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js/';
import { io } from 'socket.io-client';

import { CoinsTableHead, CoinsTableElement } from '..';

import { photos } from '../../assets';

let footerHeight;
window.addEventListener('DOMContentLoaded', () => {
  footerHeight = document.querySelector('.footer').offsetHeight + 175;
});
const searchForName = (arr, cc, result = []) => {
  arr.map((x) => {
    if (x.faName && x.coin && x.enName) {
      if (x.coin.includes(cc)) {
        result.push(x);
      }
      if (x.enName.toUpperCase().includes(cc.toUpperCase())) {
        result.push(x);
      }
      if (x.faName.includes(cc)) {
        result.push(x);
      }
    }
    return result;
  });
  let res = new Set(result);
  return [...res];
};

const topCoins = (data, list) => {
  let coins = [];
  data.map((items) => {
    list.forEach((item) => {
      let hasCoin = item === items.coin;
      if (hasCoin) coins.push(items);
    });
    return coins;
  });
  return coins;
};
const ResultNotFound = () => {
  return (
    <tr className="relative h-6">
      <td className="absolute top-0.5 left-0.5 translate-x-0.5 translate-y-0">
        یافت نشد
      </td>
    </tr>
  );
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const FakeTableData = () => {
  return array.map((index) => (
    <tr className="relative h-6" key={index}>
      <td className="pt-0.5 pr-0.5"></td>
      <td className="pt-0.5 pr-0.5"></td>
      <td className="pt-0.5 pr-0.5"></td>
      <td className="pt-0.5 pr-0.5"></td>
      <td className="pt-0.5 pr-0.5"></td>
      <td className="pt-0.5 pr-0.5"></td>
    </tr>
  ));
};
function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}
export const Coins = ({ full }) => {
  const [data, setData] = useState(null);
  const [dataLength, setDataLength] = useState(0);
  const [loading, setLoading] = useState(true);
  const [moreLoading, setMoreLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchIcon, setSearchIcon] = useState(false);
  const [page, setPage] = useState(1);
  const [windowSize, setWindowSize] = useState(true);

  ChartJs.register(LineElement, PointElement, CategoryScale, LinearScale);

  useLayoutEffect(() => {
    window.innerWidth >= 786 ? setWindowSize(true) : setWindowSize(false);
  }, []);

  useEffect(() => {
    const socket = io.connect('https://ipa.raybit.net:30299', {
      path: '/api/v1/coindata/socket.io',
    });

    socket.on('COIN_DATA_SET', (data) => {
      data = data.sort(dynamicSort('-sellPrice'));
      sessionStorage.setItem('coins', JSON.stringify(data));
      setDataLength(data.length);
      setSearchIcon(false);
      if (!full) {
        let filteredData;
        if (search.length >= 1) {
          filteredData = searchForName(data, search.toUpperCase());
          data.length = 10;
          if (filteredData.length <= 0) {
            setData(undefined);
          } else {
            setData(filteredData);
          }
        } else {
          let list = [
            'BTC',
            'ETH',
            'USDT',
            'BNB',
            'USDC',
            'ADA',
            'SOL',
            'XRP',
            'DOT',
            'LUNA',
          ];
          setData(topCoins(data, list));
        }
      } else {
        let filteredData;
        if (search.length >= 1) {
          filteredData = searchForName(data, search.toUpperCase());
          filteredData.length =
            20 * page <= filteredData.length ? 20 * page : filteredData.length;
          if (filteredData.length <= 0) {
            setData(undefined);
          } else {
            setData(filteredData);
          }
        } else {
          data.length = 30 * page <= data.length ? 30 * page : data.length;
          setData(data);
        }
      }
      if (
        window.innerHeight +
          document.documentElement.scrollTop +
          footerHeight >=
        document.scrollingElement.scrollHeight
      ) {
        setMoreLoading(false);
      }
      setLoading(false);
    });

    socket.on('disconnect', () => {
      setLoading(true);
    });

    return () => {
      socket.off('COIN_DATA_SET');
    };
  }, [full, search, page]);

  useEffect(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + footerHeight >=
      document.scrollingElement.scrollHeight
    ) {
      if (data) {
        if (data.length <= dataLength) {
          if (data.length === dataLength) return false;
          if (search.length === 0) {
            setPage(page + 1);
            setMoreLoading(true);
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, data, dataLength]);

  useEffect(() => {
    if (search.length > 0) {
      if (JSON.parse(sessionStorage.getItem('coins'))) {
        let filteredData = searchForName(
          JSON.parse(sessionStorage.getItem('coins')),
          search.toUpperCase()
        );
        filteredData.length =
          20 * page <= filteredData.length ? 20 * page : filteredData.length;
        if (filteredData.length <= 0) {
          setData(undefined);
        } else {
          setData(filteredData);
        }
      }
    }
  }, [search, page]);

  return (
    <div
      className={`relative mt-3 pt-0 pr-1/20 ${
        full ? 'bg-darkBlue pt-3 pr-0 mr-0' : ''
      }`}
      style={
        full
          ? null
          : loading
          ? windowSize
            ? { marginTop: '-1rem' }
            : { marginTop: '-4rem' }
          : null
      }
    >
      {loading ? (
        <div
          className={`relative w-4 h-4 mx-auto top-16 z-1  ${
            full ? 'coins__loading_full' : ''
          }`}
        >
          <Image
            width={100}
            height={100}
            className="coins__loading_logo"
            src={photos.Logo}
            alt=""
            loading="lazy"
          />
          <div className="loadingio-spinner-ripple-jcfaojv52">
            <div className="ldio-2qd0neygp3w">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : null}
      <table className={`coins__table ${!full ? 'coins__table_more' : ''}`}>
        <thead className="coins__table_head">
          <CoinsTableHead
            name={window.screen.width <= 1025 ? 'ارز' : 'ارز دیجیتال'}
            ttr={window.screen.width <= 1025 ? 'تتر' : 'قیمت به تتر'}
            irr={window.screen.width <= 1025 ? 'تومان' : 'قیمت به تومان'}
            search={search}
            setSearch={setSearch}
            full={full}
            searchIcon={searchIcon}
            setSearchIcon={setSearchIcon}
          />
        </thead>
        <tbody className="coins__table_body">
          {data ? (
            <CoinsTableElement data={data} style={loading} />
          ) : data === undefined ? (
            <ResultNotFound />
          ) : (
            <FakeTableData />
          )}
        </tbody>
      </table>
      {loading ? null : full ? null : (
        <div className="coins__more">
          <span>
            <Image
              width={100}
              height={100}
              src={photos.TopCoinsMoreArrow}
              alt=""
              loading="lazy"
            />
            <Link href="/market" passHref>
              بیشتر
            </Link>
          </span>
        </div>
      )}
      {moreLoading && full && !search ? (
        <div className="coins__more-loading">
          <Image
            width={100}
            height={100}
            src={photos.CoinsLoadMore}
            alt=""
            loading="lazy"
          />
        </div>
      ) : null}
    </div>
  );
};
