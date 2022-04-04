import React from "react";
import './Crads.css';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Home from "../Home";
const Cards=()=>
{
    return
    (
        %input#rad1{:checked => "checked", :name => "rad", :type => "radio"}/
%input#rad2{:name => "rad", :type => "radio"}/
%input#rad3{:name => "rad", :type => "radio"}/
.btn
#wrap
 %input{:type => "checkbox"}
 -3.times do
  .slide
   .label
   .search
   .image
   .content
    %h1
    %p
     %span Locality:
     %span Sex:
   %label classification
   %p.classifications
    %span Class
    %span Order
    %span Family
    %span Subfamily
    %span Genus
    %span Species
 .jar
 .outer
  .box
 .cartbtn
 .cart
  .inner
   -3.times do
    .bug
     .image
     %span
     %span 
      %b 1
     %span $
     %span X
   .buy
     
   
-3.times do
 .panels
    )
}

export default Home;