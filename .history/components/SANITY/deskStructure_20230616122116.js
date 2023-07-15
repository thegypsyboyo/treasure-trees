import { schemaTypes } from '../../schemas';
import { _responsive } from '@sanity/ui'

export const myStructure = (S) =>
  S.list()
    .title('TREASURE TREES CONTENT STUDIO')
    .items([...S.documentTypeListItems().reverse()])
    .items([
      // Add a category for the Home Page schemas
      S.listItem()
      .title("HOME PAGE CONTENT")
      .child(
        S.list()
          .title('HOME SLIDER')
          .items([
            S.documentTypeListItem("navbar")
              .title('NAVBAR CONTENT'),              
            S.documentTypeListItem("sliderInfo")
              .title('SLIDER CONTENT'),
            S.documentTypeListItem("slider")
              .title('SLIDERS'),              
          ])
      ),
      S.listItem()
      .title("ABOUTUS PAGE CONTENT")
      .child(
        S.list()
          .title('ABOUTUS INRO')
          .items([
            S.documentTypeListItem("aboutusIntro")
              .title('ABOUTUS INTRO'),              
            S.documentTypeListItem("aboutHistory")
              .title('ABOUTUS HISTORY'),
            S.documentTypeListItem("aboutusMission")
              .title('MISSION & VISSION'),              
            S.documentTypeListItem("aboutusVideo")
              .title('ABOUTUS VIDEO'),              
          ])
      ),
      S.listItem()
      .title("MEET THE TEAM")
      .child(
        S.list()
          .title('MEET THE TEAM')
          .items([
            S.documentTypeListItem("team")
              .title('THE TEAM MEMBERS'),              
            S.documentTypeListItem("aboutusHistory")
              .title('ABOUTUS HISTORY'),
            S.documentTypeListItem("involvement")
              .title('COLLABORATION & TEAM'),              
            S.documentTypeListItem("imageLogos")
              .title('IMAGE LOGOS'),              
          ])
      ),
      
      S.listItem()
      .title('BLOG PAGE ')
      // .icon(() => '📄')
      .child(
        S.list()
          .title('BLOG CONTENT')
          .items([
            S.documentTypeListItem("post")
              .title('BLOG CONTENT'),
              // .icon(() => '🏠'),
            S.documentTypeListItem("authorinfo")
              .title('AUTHOR INFO'),
              // .icon(() => '🌅'),
            S.documentTypeListItem("socialmedia")
              .title('SOCIAL MEDIA'),
              // .icon(() => '🌅'),
            S.documentTypeListItem("category")
              .title('CATEGORY'),
              // .icon(() => '🛍️'),
            S.documentTypeListItem("tag")
              .title('TAGS'),
            S.documentTypeListItem("postTag")
              .title('POST TAG'),         
            S.documentTypeListItem("singlePostInformation")
              .title('DATA ABOUT EACH POST'),         
              // .icon(() => '🛍️'),
            // Add other Home Page schemas here
            // ...
          ])
          
      ),
      S.listItem()
      .title("OUR WORK PAGE")
      .child(
        S.list()
          .title('OUR WORK')
          .items([
            S.documentTypeListItem("service")
              .title('OUR WORK')
              .icon(() => '🛍️'),

            S.documentTypeListItem("allData")
            .title("OUR WORK DETAILS")
            // Add other Home Page schemas here
            // ...
          ])
          
      ),
      S.listItem()
      .title("PORTFOLIO PAGE")
      .child(
        S.list()
          .title('PORTFOLIO ITEMS')
          .items([
            S.documentTypeListItem("portfolio")
              .title('PORTFOLIO INFO'),
            S.documentTypeListItem("singlePortfolioData")
              .title('PORTFOLIO DETAILS'),
              // .icon(() => '🛍️'),
            // Add other Home Page schemas here
            // ...
          ])
          
      ),
      S.listItem()
      .title("DONATION PAGE")
      .child(
        S.list()
          .title('CAUSES ITEMS')
          .items([
            S.documentTypeListItem("cause")
              .title('CAUSE INFO'),
            S.documentTypeListItem("singleCause")
              .title('PORTFOLIO DETAILS'),
              // .icon(() => '🛍️'),
            // Add other Home Page schemas here
            // ...
          ])
          
      ),
      S.listItem()
      .title("CONTACT PAGE")
      .child(
        S.list()
          .title('CONTACT INFORMATION')
          .items([
            S.documentTypeListItem("contactInfo")
              .title('CONTACT DATA '),
            S.documentTypeListItem("contactMap")
              .title('CONTACT INFO PAGE'),
            S.documentTypeListItem("infoMedias")
              .title('MEDIA INFORMATION'),
            S.documentTypeListItem("infoTimes")
              .title('TIME INFORMATION'),
            S.documentTypeListItem("mapCoordinates")
              .title('MAP COORDINATES'),
          ])
          
      ),

    ]);
