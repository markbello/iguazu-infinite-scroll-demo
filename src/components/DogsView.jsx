import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import Sticky from 'react-stickynode';
import { times } from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import DogsSegment from './DogsSegment';

const DogsView = ({
  loadSomeShades,
  headerCount,
  headerContent,
  dogsSegmentCount,
  setDogsSegmentCount,
}) => {
  const loadNextSegment = () => { setDogsSegmentCount(dogsSegmentCount + 1); };

  return (
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
                  disabled={true}
                >
                  load some dogs
                </Button>
              </div>
            </div>
          </Sticky>
        </div>
        <div className="col-4">
          <div className="offset-4" />
          <InfiniteScroll
            dataLength={4}
            hasMore={dogsSegmentCount <= 4}
            next={loadNextSegment}
            loader={<Spinner />}
            endMessage={(<p>Thats all the dogs rn</p>)}
            style={{ overflow: 'inherit' }}
          >
            {times(dogsSegmentCount, () => (
              <DogsSegment segment={dogsSegmentCount} key={`dogsSegment-${dogsSegmentCount}`} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </Fragment>
  );
};

DogsView.displayName = 'DogsView';

DogsView.propTypes = {
  loadSomeShades: PropTypes.func.isRequired,
  headerContent: PropTypes.string.isRequired,
  headerCount: PropTypes.number.isRequired,
};

export default DogsView;
