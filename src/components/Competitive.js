import React from 'react'
import CompetitiveComponents from './CompetitiveComponents'

function Competitive() {
    return (
        <div>
            <div className="container py-0">
                <div className="container my-3">
                    <h3 id="comp" className="text-dark text-center"> <img width="40px" src="https://www.svgrepo.com/show/139158/competitive-chart.svg" alt="" /> Competitive Programming</h3>
                </div>
                <div className="row my-5">
                    <CompetitiveComponents title="Binary Search" desc="2000+ experience, 68+ level and more than 280 question solved." link="https://binarysearch.com/@/ujjawalrachhoya" ImgSrc="https://www.svgrepo.com/show/36546/binary-code-loading-symbol.svg" />

                    <CompetitiveComponents title="Codechef" desc="More than 125 question solved and participate all contest." link="https://www.codechef.com/users/ujjawal100" ImgSrc="https://cdn.codechef.com/sites/all/themes/abessive/images/user_default_thumb.jpg" />

                    <CompetitiveComponents title="Leetcode" desc="More than 60 questions solved and participated in all competitive contest on leetcode." link="https://leetcode.com/ujjawalrachhoya100/" ImgSrc="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg" />
                </div>
            </div>
        </div>
    )
}

export default Competitive
