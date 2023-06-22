import Video from './Video';
import Article from './Article';
import withWrapper from './withWrapper';
import { nanoid } from 'nanoid';

/**
 * Компонент отвечающий за вывод блока отображения списка видео элементов и статей. Родительский компонент App. Дочерний компонент Video и Article для верного вывода обернуты в HOC withWrapper
 *
 * @param {object} props.list массив объектов с данными видео файлов и статей
 */
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
