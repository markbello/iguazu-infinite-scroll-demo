import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Spinner } from 'reactstrap';
import Sticky from 'react-stickynode';
import Shade from './Shade';
import { loadShadesOfNicholas } from '../core/reducers/shadesOfNicholas';
import { loadDogs } from '../core/reducers/dogs';

const Stuff = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(50);
  const handleCountChange = ({ target: { value } }) => setCount(Number(value));

  const [mode, setMode] = useState('nicholas');
  const headerContent = mode === 'nicholas'
    ? 'Shades of Nicholas Feitel'
    : 'Random Dogs';

  const { isLoading: isLoadingNicholas, data } = useSelector((state) => state.shadesOfNicholas);
  const {
    isLoading: isLoadingDogs,
    data: {
      message: dogUrls,
    },
  } = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(loadShadesOfNicholas(count));
  }, []);

  const loadSomeShades = () => {
    setMode('nicholas');
    dispatch(loadShadesOfNicholas(count));
  };

  const loadSomeDogs = () => {
    setMode('dogs');
    dispatch(loadDogs(count));
  };

  return (
    <Fragment>
      <div className="row mt-4">
        <div className="col-12">
          <h1 className="text-center">{count} {headerContent}</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-8">
          <Sticky top="container">
            <div className="row mt-4">
              <div className="col-3">
                <input
                  className="form-control mb-2"
                  min="1"
                  name="count"
                  onChange={handleCountChange}
                  type="number"
                  value={count}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4">
                <Button color="primary" onClick={loadSomeShades}>
                  load some shades
                </Button>

              </div>
              <div className="col-4">
                <Button
                  className="d-inline"
                  color="secondary"
                  outline={true}
                  onClick={loadSomeDogs}
                >
                  load some dogs
                </Button>
              </div>
            </div>
          </Sticky>
        </div>
        {mode === 'nicholas' ? (
          <Fragment>
            {isLoadingNicholas ? (<Spinner />) : (
              <div className="col-4">
                <div className="offset-4" />
                {data.map((thingAboutNicholas) => (
                  <Shade
                    label={thingAboutNicholas.label}
                    key={thingAboutNicholas.id}
                    hueRotate={thingAboutNicholas.hueRotate}
                    saturate={thingAboutNicholas.saturate}
                  />
                ))}
              </div>
            )}
          </Fragment>
        ) : (
          <Fragment>
            {isLoadingDogs ? (<Spinner />) : (
              <div className="col-4">
                <div className="offset-4" />
                {dogUrls.map((dogUrl) => (
                  <div className="row mb-4" key={dogUrl}>
                    <div className="card">
                      <div className="card-body">
                        <img src={dogUrl} width="100%" alt={dogUrl} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Stuff.displayName = 'Stuff';

export default Stuff;
