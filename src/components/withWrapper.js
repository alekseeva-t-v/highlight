import New from './New';
import Popular from './Popular';

/**
 * HOC Компонентю Служит для верного отображения блока в зависимости от количества просмотров. Родительский компонент List. Дочерние компоненты Popular (обертка для блоков с большим количеством просмотров) и New (обертка для блоков с небольшим количеством просмотров)
 * @param {number} props.views количество просмотров
 */
const withWrapper = (Component) => (props) => {
  const { views } = props;

  if (views > 1000) {
    return (
      <Popular>
        <Component {...props} />
      </Popular>
    );
  } else if (views < 100) {
    return (
      <New>
        <Component {...props} />
      </New>
    );
  } else {
    return <Component {...props} />;
  }
};

export default withWrapper;
