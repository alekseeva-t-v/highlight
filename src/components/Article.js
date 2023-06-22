/**
 * Компонент отвечающий за вывод блока отдельной статьи. Родительский компонент List.
 * @param {string} props.title Название статьи
 * @param {number} props.views количество просмотров
 */
const Article = (props) => {
  const { title, views } = props;
  return (
    <div className="item item-article">
      <h3>
        <a href="!#">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
};

export default Article;
