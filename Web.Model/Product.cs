//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Web.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class Product
    {
        public int ID { get; set; }
        public Nullable<int> CategoryId { get; set; }
        public string Name { get; set; }
        public string ProductCode { get; set; }
        public string Images { get; set; }
        public string ImageMore { get; set; }
        public Nullable<double> Price { get; set; }
        public Nullable<double> Sale { get; set; }
        public string Description { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> Status { get; set; }
    }
}