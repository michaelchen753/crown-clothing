import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './Directory.scss';
import MenuItem from '../menu-item/menu-item';

const Directory =({ sections })=>(
        <div className='directory-menu'>
        {
           sections.map(({id, ...otherSectionProps })=> {
                return <MenuItem key={id} {...otherSectionProps} />
            })
        }
        </div>
    )
const mapState = createStructuredSelector({
  sections:selectDirectorySections
});    

export default connect(mapState)(Directory);