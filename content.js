var stats = {
  "frags": parseInt($("td.stat:eq(0)").html()),
  "assists": parseInt($("td.stat:eq(1)").html()),
  "deaths": parseInt($("td.stat:eq(2)").html()),
  "plants": parseInt($("td.stat:eq(3)").html()),
  "defuses": parseInt($("td.stat:eq(4)").html())
};

stats.kdr = (stats.frags / stats.deaths).toFixed(2);
stats.kdd = stats.frags - stats.deaths;
stats.fpapd = ((stats.frags + stats.assists) / stats.deaths).toFixed(2);
stats.ppd = (stats.plants / stats.defuses).toFixed(2);

var right_col_table = "<br /><tbody>\
<tr>\
  <th class='acronym'><acronym title='Kill/Death Ratio'>KDR</acronym></th>\
  <th class='acronym'><acronym title='Kill-Death Differential'>KDD</acronym></th>\
</tr>\
";
right_col_table += "\
  <tr>\
    <td>" + stats.kdr.toString() + "</td>\
    <td>" + stats.kdd.toString() + "</td>\
  </tr>\
";

right_col_table += "\
<tr>\
  <th class='acronym'><acronym title='Frags Plus Assists Per Death'>FPAPD</acronym></th>\
  <th class='acronym'><acronym title='Bomb Plants Per Defuse'>PPD</acronym></th>\
</tr>\
";
right_col_table += "\
  <tr>\
    <td>" + stats.fpapd.toString() + "</td>\
    <td>" + stats.ppd.toString() + "</td>\
  </tr>\
</tbody>";

$("table.margin-top").html(right_col_table);
