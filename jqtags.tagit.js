_tag_('jqtags.tagit', function (test) {

  var $ = _module_("jQuery");
  return {
    tagName: "jq-tagit",
    events: {

    },
    accessors: {
      value: {
        type: "string",
        default: "",
        onChange: "setValue"
      }
    },
    attachedCallback: function () {
      var self = this;
      this.$.innerHTML = "hey";
    },
    detachedCallback: function(){
    }
  };

});
