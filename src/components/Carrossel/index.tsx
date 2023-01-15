import Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const Carrossel: React.FC <{urls : string[]}> = ({urls}) => {
  return (
    <div style={{ display: 'block', width:200 }}>
    <Carousel>

    {urls.map((item, index)=>

<Carousel.Item key={index}>
  <img key={item}
    className="d-block w-100 box-carrossel"
    src={item}
      alt=''
  />
</Carousel.Item>

      )}
    </Carousel>
  </div>
  );
}

export default Carrossel