import { useEffect, useState } from 'react';

import { photos } from '../../public/assets/assets';
import Image from 'next/image';

import Style from './styles/CoinsTableHead.module.css';

export const CoinsTableHead = ({
  name,
  ttr,
  irr,
  search,
  setSearch,
  full,
  searchIcon,
  setSearchIcon,
}) => {
  const [windowSize, setWindowSize] = useState(true);

  useEffect(() => {
    window.innerWidth >= 786 ? setWindowSize(true) : setWindowSize(false);
  }, []);

  return (
    <tr className={Style.coins__table_head_item}>
      <th
        style={full ? null : { width: '16%' }}
        className={`${Style.coins__table_head_item_content} ${Style.coins__table_head_item_name}`}
      >
        {name}
      </th>
      <th
        style={full ? null : { width: '16%' }}
        className={`${Style.coins__table_head_item_content} ${Style.coins__table_head_item_irr}`}
      >
        {irr}
      </th>
      {windowSize ? (
        <th
          style={full ? null : { width: '16%' }}
          className={`${Style.coins__table_head_item_content} ${Style.coins__table_head_item_usdt}`}
        >
          {ttr}
        </th>
      ) : undefined}
      <th
        style={full ? null : { width: '16%' }}
        className={`${Style.coins__table_head_item_content} ${Style.coins__table_head_item_change}`}
      >
        تغییرات
      </th>
      {windowSize ? (
        <th
          className={`${Style.coins__table_head_item_content} ${Style.coins__table_head_item_chart}`}
        >
          نمودار
        </th>
      ) : undefined}
      <th
        className={`${Style.coins__table_head_item_content} ${Style.coins__table_head_item_search}`}
      >
        <input
          className={Style.coins__table_head_item_search_input}
          placeholder={windowSize ? 'نام ارز را وارد نمائید' : 'جستجو'}
          type="text"
          name="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchIcon(true);
          }}
        />
        {searchIcon ? (
          <span className={Style.coins__table_head_item_search_icon_loading}>
            <Image
              width={50}
              height={50}
              src={photos.MarketSearchCoinsFormIconLoading}
              alt=""
              loading="lazy"
            />
          </span>
        ) : (
          <span className={Style.coins__table_head_item_search_icon}>
            <Image
              width={50}
              height={50}
              src={photos.MarketSearchCoinsFormIcon}
              alt=""
              loading="lazy"
            />
          </span>
        )}
      </th>
    </tr>
  );
};
