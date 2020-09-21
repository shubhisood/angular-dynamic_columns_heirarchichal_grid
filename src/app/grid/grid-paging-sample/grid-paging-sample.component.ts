import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from "../services/data";
import { DataService } from "../services/data.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "grid-sample",
    styleUrls: ["./grid-paging-sample.component.scss"],
    templateUrl: "grid-paging-sample.component.html"
})

export class PagingSampleComponent {
    @ViewChild("grid1") public grid1: IgxGridComponent;
    public data: any[];

    public columns = [
      { header: "Rank", headerClasses: "myClass", field: "Id", sortable: "true", width: "16%" },
      { field: "Name", header: "Athlete", width: "16%" },
      { field: "BeatsPerMinute", header: "Beats per minute", dataType: "number", width: "16%" },
      { field: "TopSpeed", header: "Top Speed", dataType: "number", width: "16%" },
      { field: "TrackProgress", header: "Track Progress", width: "18%", linearProgress: true},
      { field: "CountryFlag", header: "Country", width: "18%", countryFlag: true }
    ];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = athletesData;
    }

    public cellSelection(evt) {
        const cell = evt.cell;
        this.grid1.selectRows([cell.row.rowID], true);
    }

    public addColumn() {
      this.columns.unshift({ field: "CountryFlag", header: "Country", width: "18%", countryFlag: true })
    }
}
