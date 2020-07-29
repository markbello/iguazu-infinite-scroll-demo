import React from 'react';
import styled from '@emotion/styled';
import nicholas from '../nicholas.jpg';

const FilteredImage = styled.img`
  filter: hue-rotate(${(props) => props.hueRotate}deg) saturate(${(props) => props.saturate}%);
`;

const Shade = ({
  hueRotate,
  label,
  saturate,
}) => (
  <div className="row mb-4">
    <div className="card">
      <div className="card-body">
        <FilteredImage src={nicholas} width="100%" hueRotate={hueRotate} saturate={saturate} />
      </div>
      <div className="card-footer">
        <h4 className="text-center mt-2">{label}</h4>
      </div>
    </div>
  </div>
);

Shade.displayName = 'Shade';

export default Shade;
