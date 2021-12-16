import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface IPlacemark {
  geometry: number[],
  properties: {
    iconContent: string,
    balloonContentHeader: string
  }
}

let placemarkIndex = 1;

const initialPlacemark = { 
  geometry: [55, 37],
  properties: {
    iconContent: placemarkIndex.toString(),
    balloonContentHeader: ''
  }
};

export default function FormWMap(){
  const [placemarks, setPlacemarks] = useState<IPlacemark[]>([]);
  const [newPlacemark, setNewPlacemark] = useState(initialPlacemark);

  const addNewPlacemark = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const array = placemarks;
    setNewPlacemark(prevState => ({...prevState, properties: { ...prevState.properties, iconContent: placemarkIndex.toString() } }));
    array.push(newPlacemark);
    setPlacemarks(array);
    placemarkIndex = placemarkIndex + 1;
  }

  const handleChangeInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'balloonContentHeader') {
      setNewPlacemark(prevState => ({...prevState, properties: { ...prevState.properties, balloonContentHeader: value } }));
    } else if (name === 'geometryLat') {
      setNewPlacemark(prevState => ({...prevState, geometry: [value, prevState.geometry[1]]}));
    } else {
      setNewPlacemark(prevState => ({...prevState, geometry: [prevState.geometry[0], value]}));
    }
  }

  const handleDelete = (index: string) => {
    const array = placemarks.filter(item => item.properties.iconContent !== index);
    setPlacemarks(array);
  }

  return <>
    <Container>
      <Placemarks>
        <form onSubmit={addNewPlacemark}>
          <label>
            <h6>Введите ширину</h6>
            <input type="number" name="geometryLat" id="geometryLat" value={newPlacemark.geometry[0]} required onChange={handleChangeInput} />
          </label>
          <label>
            <h6>Введите долготу</h6>
            <input type="number" name="geometryLong" id="geometryLong" value={newPlacemark.geometry[1]} required onChange={handleChangeInput} />
          </label>
          <label>
            <h6>Введите название</h6>
            <input type="text" name="balloonContentHeader" value={newPlacemark.properties.balloonContentHeader} required onChange={handleChangeInput} />
          </label>
          <button className="btn btn-primary" type="submit">Добавить</button>
        </form>
        <div id="placemarks-ymaps">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {placemarks.map((placemark, index) => <tr key={index}
                data-index={placemark.properties.iconContent}
                data-placemark={JSON.stringify(placemark)}
                className="placemark">
                <th scope="row">{placemark.properties.iconContent}</th>
                <td>{placemark.properties.balloonContentHeader}</td>
                <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(placemark.properties.iconContent)}>×</button></td>
              </tr>)}
            </tbody>
          </table>
          Удалять можно только с последнего элемента, иначе работает некорректно
        </div>
      </Placemarks>
      
      <div id="map" style={{width: '600px', height: '400px'}}></div>
      
    </Container>
</>
}


const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
  transition: all 0.2s;

  & label {
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  & input {
    width: 100%;
    box-sizing: border-box;
  }

  & form {
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #eee;
  }
`

const Placemarks = styled.div`
  width: 300px;
`