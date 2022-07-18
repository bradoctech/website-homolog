<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-12 sidebar-service-left">
          <CardStyle5 :card-menu="menu_item" />
          <div class="testimonial-widget-menu widget" />
        </div>
        <div class="col-lg-8 col-sm-12 pt-5 pt-lg-0">
          <div class="row iq-pb-45">
            <div class="col-sm-12">
              <!-- <div class="row">
                <div class="col-sm-12">
                  <CardStyle4 :card-image="images" card-class="owl-carousel" />
                </div>
              </div> -->
              <div class="mb-0">
                <p>
                  TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01
                  TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01
                  TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01
                  TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01
                  TEXTO 01
                </p>
                <p>
                  TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01
                  TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01
                  TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01 TEXTO 01
                </p>
              </div>
            </div>
          </div>
          <div class="row iq-pb-45">
            <div class="col-sm-12 col-md-6">
              <h4 class="mb-4">
                Advanced Analytics Strategies
              </h4>
              <div class="service-chart">
                <canvas id="canvas" class="data-analytics-chart" />
              </div>
              <ul id="js-legend" class="chart-legend" />
            </div>
            <div class="col-sm-12 col-md-6 mt-5 mt-lg-0 mt-md-0">
              <h4 class="mb-4">
                Advanced Analytics Strategies
              </h4>
              <div class="text-left">
                <ul class="iq-list">
                  <li>
                    <i class="fa fa-check-square-o" /><span>Advance Advisory Team</span>
                  </li>
                  <li>
                    <i class="fa fa-check-square-o" /><span>Professional Consulting Services</span>
                  </li>
                  <li>
                    <i class="fa fa-check-square-o" /><span>
                      24/7 Support Help Center</span>
                  </li>
                  <li>
                    <i class="fa fa-check-square-o" /><span>Customer Service &amp; Operations</span>
                  </li>
                  <li>
                    <i class="fa fa-check-square-o" /><span>There are many variations of passages.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <h3 class="mb-3">
                Advanced Analytics Strategies
              </h3>
              <p>
                TEXTO 02 TEXTO 02 TEXTO 02 TEXTO 02 TEXTO 02 TEXTO 02 TEXTO 02
                TEXTO 02 TEXTO 02 TEXTO 02 TEXTO 02 TEXTO 02 TEXTO 02 TEXTO 02
                TEXTO 02 TEXTO 02
              </p>
              <h3 class="mb-3">
                Software Product Development
              </h3>
              <p>
                TEXTO 03 TEXTO 03 TEXTO 03 TEXTO 03 TEXTO 03 TEXTO 03 TEXTO 03
                TEXTO 03 TEXTO 03 TEXTO 03 TEXTO 03 TEXTO 03 TEXTO 03 TEXTO 03
                TEXTO 03 TEXTO 03 TEXTO 03 TEXTO 03 TEXTO 03
              </p>
              <div class="row">
                <div class="col-sm-6">
                  <div class="text-left mb-2 mb-lg-0 mb-md-0">
                    <ul class="iq-list">
                      <li>
                        <i class="fa fa-check-square-o" /><span>Advance Advisory Team</span>
                      </li>
                      <li>
                        <i class="fa fa-check-square-o" /><span>Professional Consulting Services</span>
                      </li>
                      <li>
                        <i class="fa fa-check-square-o" /><span>
                          24/7 Support Help Center</span>
                      </li>
                      <li>
                        <i class="fa fa-check-square-o" /><span>Customer Service &amp; Operations</span>
                      </li>
                      <li>
                        <i class="fa fa-check-square-o" /><span>There are many variations of passages.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="text-left">
                    <ul class="iq-list">
                      <li>
                        <i class="fa fa-check-square-o" /><span>Advance Advisory Team</span>
                      </li>
                      <li>
                        <i class="fa fa-check-square-o" /><span>Professional Consulting Services</span>
                      </li>
                      <li>
                        <i class="fa fa-check-square-o" /><span>
                          24/7 Support Help Center</span>
                      </li>
                      <li>
                        <i class="fa fa-check-square-o" /><span>Customer Service &amp; Operations</span>
                      </li>
                      <li>
                        <i class="fa fa-check-square-o" /><span>There are many variations of passages.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { menuServices } from '../../../config/constant.js'

export default {
  name: 'Analytics',
  data () {
    return {
      images: [
        {
          src: require('../../../assets/images/about-us/04.png')
        },
        {
          src: require('../../../assets/images/about-us/03.png')
        },
        {
          src: require('../../../assets/images/about-us/04.png')
        },
        {
          src: require('../../../assets/images/about-us/03.png')
        },
        {
          src: require('../../../assets/images/about-us/04.png')
        },
        {
          src: require('../../../assets/images/about-us/03.png')
        }
      ],
      menu_item: menuServices

    }
  }
}
</script>
