import Video from './Video';
import Article from './Article';
import withWrapper from './withWrapper';
import { nanoid } from 'nanoid';

const List = (props) => {
  const { list } = props;

  return list.map((item) => {
    if (item.type === 'video') {
      return withWrapper(Video)({...item, key: nanoid()})
    } else if (item.type === 'article') {
      return withWrapper(Article)({...item, key: nanoid()});
    }
  });
};

export default List;
