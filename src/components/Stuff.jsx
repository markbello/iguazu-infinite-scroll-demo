import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Spinner } from 'reactstrap';
import Sticky from 'react-stickynode';
import { connectAsync } from 'iguazu';
import {
  loadCollection,
  queryCollection,
} from 'iguazu-rest';
import Shade from './Shade';
import { setCount } from '../core/reducers/app';
import DogsView from './DogsView';

const Stuff = ({
  nicholas,
  isLoading,
  loadedWithErrors,
}) => {
  const dispatch = useDispatch();

  const handleCountChange = ({ target: { value } }) => {
    const valueAsNumber = Number(value);
    if (!value || !valueAsNumber) {
      return dispatch(setCount(1));
    }

    return dispatch(setCount(Number(value)));
  };

  const [mode, setMode] = useState('nicholas');

  const { count } = useSelector((state) => state.app);

  const [dogsSegmentCount, setDogsSegmentCount] = useState(1);
  const headerCount = mode === 'nicholas'
    ? count
    : dogsSegmentCount * 25;

  const headerContent = mode === 'nicholas'
    ? 'Shades of Nicholas Feitel'
    : 'Random Dogs';

  const loadSomeShades = () => {
    setMode('nicholas');
    dispatch(loadCollection({
      resource: 'nicholas',
      id: count,
      opts: {
        query: {
          count,
        },
      },
    }));
  };

  const loadSomeDogs = () => { setMode('dogs'); };

  if (loadedWithErrors()) { return (<h1>Something went wrong</h1>); }

  return mode === 'nicholas' ? (
    <Fragment>
      <div className="row mt-4">
        <div className="col-12">
          <h1 className="text-center">{headerCount} {headerContent}</h1>
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
        <Fragment>
          {isLoading() ? (<Spinner />) : (
            <div className="col-4">
              <div className="offset-4" />
              {nicholas.map((thingAboutNicholas) => (
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
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <DogsView
        dogsSegmentCount={dogsSegmentCount}
        headerContent={headerContent}
        headerCount={headerCount}
        loadSomeShades={loadSomeShades}
        setDogsSegmentCount={setDogsSegmentCount}
      />
    </Fragment>
  );
};

Stuff.displayName = 'Stuff';

export const loadDataAsProps = ({ store: { dispatch, getState } }) => {
  const { app: { count } } = getState();

  return {
    nicholas: () => dispatch(queryCollection({
      resource: 'nicholas',
      id: count,
      opts: {
        query: {
          count,
        },
      },
    })),
  };
};

export default connectAsync({ loadDataAsProps })(Stuff);
