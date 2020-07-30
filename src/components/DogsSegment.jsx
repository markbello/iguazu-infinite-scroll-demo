import React, { Fragment } from 'react';
import { queryResource } from 'iguazu-rest';
import { connectAsync } from 'iguazu';

const DogsSegment = ({
  dogs,
  isLoading,
  segment,
}) => !isLoading() && (
  <Fragment>
    {dogs.data && dogs.data.map((dogUrl) => (
      <div className="row mb-4" key={`dogsSegment-${segment}-${dogUrl}`}>
        <div className="card">
          <div className="card-body">
            <img src={dogUrl} width="100%" alt={dogUrl} />
          </div>
        </div>
      </div>
    ))}
  </Fragment>
);

DogsSegment.displayName = 'DogsSegment';

export const loadDataAsProps = ({ store: { dispatch }, ownProps: { segment } }) => {
  const offset = (segment * 25) - 25; // this accounts for an initial offset of 0

  return {
    dogs: () => dispatch(queryResource({
      resource: 'dogs',
      id: offset,
      opts: {
        query: { offset },
      },
    })),
  };
};

export default connectAsync({ loadDataAsProps })(DogsSegment);
