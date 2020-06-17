import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {
  ViewerGQL,
  User,
  ViewerQuery,
  ChangeUserStatusGQL,
} from 'src/generated/graphql';
import { GraphQLError } from 'graphql';
import { Observable } from 'apollo-link';
import { ApolloQueryResult } from 'apollo-client';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = true;
  errors: readonly GraphQLError[] = null;
  data: ViewerQuery;

  constructor(
    private viewerGQL: ViewerGQL,
    private changeUserStatusGQL: ChangeUserStatusGQL
  ) {}

  ngOnInit() {
    // remember to unsunscribe :D
    this.viewerGQL
      .watch()
      .valueChanges.subscribe(({ data, loading, errors }) => {
        this.loading = loading;
        this.errors = errors;
        this.data = data;
      });
  }

  updateStatus(message: string) {
    if (message) {
      this.loading = true;
      // No need to unsubscribe here, it will complete itself
      this.changeUserStatusGQL
        .mutate(
          { input: { message } },
          // refetch query is necessary if your status is empty
          // as it happened during the demo 🤦‍♂️
          // for me info please check the docs: https://www.apollographql.com/docs/angular/features/cache-updates/
          { refetchQueries: [{ query: this.viewerGQL.document }] }
        )
        .subscribe();
    }
  }
}
