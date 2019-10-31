$('.ent-btn').click(function(event) {
  event.preventDefault();
  //window.alert('aaa');
  let elm = $(this);
  let child = elm.parent().find('input').val();
  let change_btn = elm.parents('.ent-info').find('#not-entry');
  //let change_btn = elm.parent().parent().parent().find('.btn').val();
  console.log('btn value:')
  console.log(change_btn);
  //exit;
  $.ajax({
      url: "/serial/goodsinput",
      //url: "../serial/goodsinput",
      //url: "../serial/actions/actions.class.php",
      type: 'POST',
      data: {
          'entry': child
      }
  }).done(function (data) {//Ajax通信に成功したときの処理
        //$("#ajax").html(data);
      elm.css('background', 'red');
      change_btn.css('background', '#FFFFFF');
      console.log('success');
      console.log(data);
  }).fail(function (data) { //Ajax通信に失敗したときの処理
      console.log('fail');
  }).always(function (data) { //処理が完了した場合の処理
      //break;
  });
});