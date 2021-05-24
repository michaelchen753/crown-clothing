import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  CollectionPreview  from '../collection-preview/collection-preview';
import  { selectCollectionsForPreview }  from '../../redux/shop/shop.selector';
import './collection-overview.scss';


const CollectionsOverview = ({collections})=> (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
        </div>
);

const mapState = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapState)(CollectionsOverview);

