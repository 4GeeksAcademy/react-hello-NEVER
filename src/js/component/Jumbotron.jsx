import React from 'react';

export const Jumbotron = () => {
    return (
        <div class="jumbotron bg-light p-3 w-100">
            <h1 class="display-4">A Warm Welcome!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
                </p>
        </div>
    );
};