import React from 'react'

const BoxShadow = () => {
    return (
        <div>
            <section class="box_shadow_examples">

                <h2>1. Basic shadow</h2>
                <div class="box box-shadow-basic">Basic shadow</div>

                <h2>2. Shadow with offset and blur</h2>
                <div class="box box-shadow-offset-blur">Offset + blur</div>

                <h2>3. Shadow with spread</h2>
                <div class="box box-shadow-spread">With spread radius</div>

                <h2>4. Shadow with color and opacity</h2>
                <div class="box box-shadow-color">Color & opacity</div>

                <h2>5. Multiple shadows</h2>
                <div class="box box-shadow-multiple">Multiple shadows</div>

            </section>
        </div>
    )
}

export default BoxShadow