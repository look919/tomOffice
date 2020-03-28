import React from 'react';
import NewsOptionItem from './NewsOptionItem';

import NewDesk from '../../../img/new-desk.jpg';
import NewOfficeCabinet from '../../../img/new-officecabinet.jpg';

import NewChair from '../../../img/new-chair.jpg';

const NewsOption = () => {
  return (
    <div className='dashboard__recommended__content__news-option'>
      <NewsOptionItem
        name={'Szafa wysoka AGAT przeszklona S5C'}
        desc={
          'Aliquam nec ullamcorper sapien. Aliquam erat volutpat. Donec faucibus, nunc non molestie posuere, tortor massa vestibulum mi, vulputate tristique ex eros sit amet sapien. Maecenas ullamcorper elit vel metus euismod aliquet. Vestibulum iaculis lacus ac accumsan placerat. Nam quis ex magna.'
        }
        img={NewOfficeCabinet}
        price={'1311,20'}
        oldPrice={'1639,-'}
      />
      <NewsOptionItem
        name={'Biurko TEZAUR 1S1D TZRB213-Z113'}
        desc={
          'Sed egestas ligula neque, eget maximus tellus venenatis ut. Fusce ac odio dignissim, ultrices lectus vel, pharetra urna. Fusce varius quam quis erat dignissim, id imperdiet est interdum. Donec aliquam, eros viverra consectetur aliquam, metus eros rhoncus orci, vitae congue nisi arcu eu sapien.'
        }
        img={NewDesk}
        price={'559,20'}
        oldPrice={'699,-'}
      />
      <NewsOptionItem
        name={'Fotel biurowy MIAMI CX0330M-1'}
        desc={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra laoreet tempor. Nullam pulvinar mauris non ex pulvinar imperdiet. Cras mattis nisl a felis rhoncus, eu dignissim arcu pharetra.'
        }
        img={NewChair}
        price={'229,20'}
        oldPrice={'329,-'}
      />
    </div>
  );
};

export default NewsOption;
