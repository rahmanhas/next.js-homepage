import React from 'react';

const SingleBlog = ({params}) => {
    console.log(params.id);
    return (
        <div>
        SingleBlog {params.id}
        </div>
    );
};

export default SingleBlog;